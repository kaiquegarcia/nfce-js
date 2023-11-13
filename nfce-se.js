(function() {
    let items = [], total = 0;
    document.querySelectorAll("tr[id^='Item + ']").forEach((item) => {
      const name = item.querySelector(".txtTit").innerText;
      const qtd = Number(item.querySelector(".Rqtd").innerText.replace('Qtde.:', ''));
      const price = Number(item.querySelector(".RvlUnit").innerText.replace('Vl. Unit.:', '').replace('.', '').replace(',', '.'));
  
      const obj = items.find((i) => i.name === name);
      if (obj) {
        obj.qtd += qtd;
      } else {
        items.push({name, qtd, price, total: 0});
      }
  
      total += qtd * price;
    });
  
      for(const item of items) {
      item.total = (item.qtd * item.price).toFixed(2);
    }
  
    items.sort((a, b) => b.total - a.total);
  
    console.table(items);
    console.log('Total: ', total.toFixed(2));
  })();