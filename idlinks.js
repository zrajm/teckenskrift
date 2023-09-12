//-*-js-indent-level:2-*-
// Copyright 2019-2022 by zrajm. Licenses: CC BY-SA (text), GPLv2 (code).
/*
Add links (to itself) to all elements with 'id' attribute, except for <section>
and <div>, where the link is instead added to the first child element
(presumably an <h?> element).

On hovering above a linked element, a ¶ glyph appears after it. The ¶ links to
the given ID.
*/
$(function () {
  "use strict";
  function addIdLinks() {
    $("[id]").each(function (i, elem) {
      var jq = $(elem), id = jq.attr("id");
      if (jq.prop("tagName").match(/^(?:DIV|SECTION)$/)) {
        jq = jq.children().first();
      }
      jq.addClass("idbase").append("<a href='#" + id + "' class=idlink>¶</a>");
    });
  }
  // Load CSS, add ID links on successful load.
  $("<link rel=stylesheet>")
    .on("load", addIdLinks)
    .appendTo('head')
    .attr({ href: "idlinks.css" });
});
/*[eof]*/
