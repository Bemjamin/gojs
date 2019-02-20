var linkTemplate = (function(){
    return $(
        go.Link,
        { relinkableFrom: true, relinkableTo: true, toShortLength: 4 }, // let user reconnect links
        $(go.Shape, { strokeWidth: 1.5 }),
        $(go.Shape, { toArrow: "Standard", stroke: null })
      );
}())