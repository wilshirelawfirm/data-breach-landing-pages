$((function(){var t=$(".owl-carousel");t.owlCarousel({items:!0,loop:!0,center:!0,autoWidth:!0,autoplay:!0,autoplayHoverPause:!0}),t.on("changed.owl.carousel",(function(t){const e=$(".owl-item")[t.item.index]?.firstChild?.getAttribute("data-hash");$(".tab-pane.active.show").removeClass("active show"),$(`#${e}-tab`).addClass("active show")}));var e,a=$("#card-container");$(".arrow").click((function(){$(this).hasClass("right")?(e=a.outerWidth()/2+a.scrollLeft(),a.animate({scrollLeft:e})):(e=a.outerWidth()/2-a.scrollLeft(),a.animate({scrollLeft:-e}))}));const o=$(".badge-card-slider"),r=$(".badge-card-slider > div");let l=0;var i;i=r.length,setInterval((function(){if(l===i-1)return l=0,void(o[0].scrollLeft=0);l++,o[0].scrollBy(r.first().outerWidth(),0)}),4e3)}));