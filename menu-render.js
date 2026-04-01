(function () {
  function formatMoney(n) {
    if (n === undefined || n === null || Number.isNaN(Number(n))) return "";
    return (
      "$" +
      Number(n).toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })
    );
  }

  function el(tag, className, attrs) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (attrs) {
      Object.keys(attrs).forEach(function (k) {
        if (k === "text") node.textContent = attrs[k];
        else node.setAttribute(k, attrs[k]);
      });
    }
    return node;
  }

  function renderCategoryMeta(meta) {
    if (!meta) return null;
    var wrap = el("div", "menu-meta");
    if (meta.description) {
      wrap.appendChild(el("p", "menu-meta-line", { text: meta.description }));
    }
    if (meta.substitution) {
      wrap.appendChild(el("p", "menu-meta-line menu-meta-muted", { text: meta.substitution }));
    }
    if (meta.dippingSauces && meta.dippingSauces.length) {
      wrap.appendChild(
        el("p", "menu-meta-line", {
          text: "Dipping sauces: " + meta.dippingSauces.join(", "),
        })
      );
    }
    if (meta.price !== undefined && !meta.description) {
      wrap.appendChild(
        el("p", "menu-meta-line", { text: formatMoney(meta.price) + " each unless noted" })
      );
    }
    return wrap.childNodes.length ? wrap : null;
  }

  function dishPriceLine(item, categoryMeta) {
    var base = categoryMeta && categoryMeta.price !== undefined ? categoryMeta.price : null;
    if (item.price !== undefined) return formatMoney(item.price);
    if (base != null && item.priceModifier !== undefined) {
      return formatMoney(base + item.priceModifier);
    }
    if (base != null && item.priceModifier === undefined) return formatMoney(base);
    return "";
  }

  function renderFoodItem(item, categoryName) {
    var article = el("article", "menu-dish");
    var head = el("div", "menu-dish-head");
    var nameWrap = el("span", "menu-dish-name-wrap");
    var nameText = item.name;
    if (item.quantity) {
      nameText +=
        categoryName === "Tacos"
          ? " · " + item.quantity + " tacos"
          : " · " + item.quantity + " pc";
    }
    nameWrap.appendChild(el("span", "menu-dish-name", { text: nameText }));

    var priceStr = item.price !== undefined ? formatMoney(item.price) : "";
    if (item.variants && item.variants.length) {
      priceStr = "";
    }
    head.appendChild(nameWrap);
    if (priceStr) {
      head.appendChild(el("span", "menu-dish-price", { text: priceStr }));
    }
    article.appendChild(head);

    if (item.description) {
      article.appendChild(el("p", "menu-dish-desc", { text: item.description }));
    }

    if (item.variants && item.variants.length) {
      var ul = el("ul", "menu-variants");
      item.variants.forEach(function (v) {
        var li = el("li", "menu-variant-row");
        li.appendChild(el("span", "menu-variant-name", { text: v.name }));
        li.appendChild(el("span", "menu-variant-price", { text: formatMoney(v.price) }));
        ul.appendChild(li);
      });
      article.appendChild(ul);
    }

    if (item.addOns && item.addOns.length) {
      var addWrap = el("div", "menu-addons");
      item.addOns.forEach(function (a) {
        var row = el("div", "menu-addon-row");
        row.appendChild(el("span", null, { text: a.name }));
        row.appendChild(el("span", "menu-addon-price", { text: formatMoney(a.price) }));
        addWrap.appendChild(row);
      });
      article.appendChild(addWrap);
    }

    return article;
  }

  function renderDrinkItem(item, catMeta) {
    var article = el("article", "menu-dish menu-dish--simple");
    var head = el("div", "menu-dish-head");
    head.appendChild(el("span", "menu-dish-name", { text: item.name }));
    var p = dishPriceLine(item, catMeta);
    if (p) head.appendChild(el("span", "menu-dish-price", { text: p }));
    article.appendChild(head);
    return article;
  }

  function renderWingSauceCategory(cat) {
    var block = el("div", "menu-block");
    block.appendChild(el("h3", "menu-block-title", { text: cat.category }));
    var grid = el("ul", "menu-sauce-grid");
    cat.items.forEach(function (item) {
      var li = el("li", null);
      li.textContent = item.name;
      grid.appendChild(li);
    });
    block.appendChild(grid);
    return block;
  }

  function renderBeerCategory(cat) {
    var block = el("div", "menu-block menu-block--beer");
    block.appendChild(el("h3", "menu-block-title", { text: cat.category }));
    if (!cat.sections) return block;
    cat.sections.forEach(function (sec) {
      block.appendChild(el("h4", "menu-beer-subtitle", { text: sec.name }));
      var list = el("ul", "menu-beer-list");
      sec.items.forEach(function (name) {
        var li = el("li", null);
        li.textContent = name;
        list.appendChild(li);
      });
      block.appendChild(list);
    });
    return block;
  }

  function renderFoodCategory(cat) {
    if (cat.category === "Wing Sauce") {
      return renderWingSauceCategory(cat);
    }
    var block = el("div", "menu-block");
    block.appendChild(el("h3", "menu-block-title", { text: cat.category }));
    var metaNode = renderCategoryMeta(cat.meta);
    if (metaNode) block.appendChild(metaNode);
    var itemsWrap = el("div", "menu-items");
    cat.items.forEach(function (item) {
      itemsWrap.appendChild(renderFoodItem(item, cat.category));
    });
    block.appendChild(itemsWrap);

    if (cat.addOns && cat.addOns.length) {
      var addSec = el("div", "menu-category-addons");
      addSec.appendChild(el("p", "menu-addons-label", { text: "Add-ons" }));
      cat.addOns.forEach(function (a) {
        var row = el("div", "menu-addon-row");
        row.appendChild(el("span", null, { text: a.name }));
        row.appendChild(el("span", "menu-addon-price", { text: formatMoney(a.price) }));
        addSec.appendChild(row);
      });
      block.appendChild(addSec);
    }

    return block;
  }

  function renderDrinkCategory(cat) {
    if (cat.category === "Beer") {
      return renderBeerCategory(cat);
    }
    var block = el("div", "menu-block");
    block.appendChild(el("h3", "menu-block-title", { text: cat.category }));
    var metaNode = renderCategoryMeta(cat.meta);
    if (metaNode) block.appendChild(metaNode);
    var itemsWrap = el("div", "menu-items");
    cat.items.forEach(function (item) {
      itemsWrap.appendChild(renderDrinkItem(item, cat.meta));
    });
    block.appendChild(itemsWrap);
    return block;
  }

  function mount() {
    var data = window.MENU_DATA;
    if (!data || !data.menu) return;

    var root = document.getElementById("menu-dynamic");
    if (!root) return;

    root.innerHTML = "";

    var foodMajor = el("h3", "menu-major-heading", { text: "Food" });
    root.appendChild(foodMajor);

    var foodGrid = el("div", "menu-dynamic-grid");
    data.menu.food.forEach(function (cat) {
      foodGrid.appendChild(renderFoodCategory(cat));
    });
    root.appendChild(foodGrid);

    var drinkMajor = el("h3", "menu-major-heading", { text: "Drinks" });
    root.appendChild(drinkMajor);

    var drinkGrid = el("div", "menu-dynamic-grid");
    data.menu.drinks.forEach(function (cat) {
      drinkGrid.appendChild(renderDrinkCategory(cat));
    });
    root.appendChild(drinkGrid);

    if (data.notes && data.notes.length) {
      var notes = el("ul", "menu-notes");
      data.notes.forEach(function (n) {
        var li = el("li", null);
        li.textContent = n;
        notes.appendChild(li);
      });
      root.appendChild(notes);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mount);
  } else {
    mount();
  }
})();
