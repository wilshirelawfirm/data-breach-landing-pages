$((function(){var t=$(".owl-carousel");t.owlCarousel({items:!0,loop:!0,center:!0,autoWidth:!0,autoplay:!0,autoplayHoverPause:!0}),t.on("changed.owl.carousel",(function(t){const a=$(".owl-item")[t.item.index]?.firstChild?.getAttribute("data-hash");$(".tab-pane.active.show").removeClass("active show"),$(`#${a}-tab`).addClass("active show")}));var a,e=$("#card-container");$(".arrow").click((function(){$(this).hasClass("right")?(a=e.outerWidth()/2+e.scrollLeft(),e.animate({scrollLeft:a})):(a=e.outerWidth()/2-e.scrollLeft(),e.animate({scrollLeft:-a}))}));const o=$(".badge-card-slider"),l=$(".badge-card-slider > div");let r=0;var s;s=l.length,setInterval((function(){if(r===s-1)return r=0,void(o[0].scrollLeft=0);r++,o[0].scrollBy(100*r,0)}),2500)}));