(function(){
  "use strict";
  function normalize(value){
    return (value||"").toString().normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().trim();
  }
  function initStore(){
    var cards=Array.prototype.slice.call(document.querySelectorAll("[data-store-card]"));
    if(!cards.length)return;
    var buttons=Array.prototype.slice.call(document.querySelectorAll("[data-store-filter]"));
    var sections=Array.prototype.slice.call(document.querySelectorAll("[data-store-category-section]"));
    var input=document.querySelector("[data-store-search]");
    var empty=document.querySelector("[data-store-empty]");
    var active="all";
    function render(){
      var query=normalize(input&&input.value);
      var visible=0;
      cards.forEach(function(card){
        var category=card.getAttribute("data-category");
        var haystack=normalize(card.getAttribute("data-search"));
        var show=(active==="all"||active===category)&&(!query||haystack.indexOf(query)!==-1);
        card.hidden=!show;
        if(show)visible+=1;
      });
      sections.forEach(function(section){
        var count=section.querySelectorAll("[data-store-card]:not([hidden])").length;
        section.hidden=count===0;
      });
      if(empty)empty.hidden=visible!==0;
    }
    buttons.forEach(function(button){
      button.addEventListener("click",function(){
        active=button.getAttribute("data-store-filter")||"all";
        buttons.forEach(function(item){item.classList.toggle("is-active",item===button);});
        render();
      });
    });
    if(input)input.addEventListener("input",render);
    render();
  }
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",initStore,{once:true});else initStore();
})();
