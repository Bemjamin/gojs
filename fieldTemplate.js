var fieldTemplate = (function() {
    
    return $(
        go.Panel,
        "TableRow", // this Panel is a row in the containing Table
        new go.Binding("portId", "name"), // this Panel is a "port"
        {
          background: "transparent", // so this port's background can be picked by the mouse
          fromSpot: go.Spot.LeftRightSides, // links only go from the right side to the left side
          toSpot: go.Spot.LeftRightSides,
          // allow drawing links from or to this port:
          fromLinkable: true,
          toLinkable: true
        },
        {
          // allow the user to select items -- the background color indicates whether "selected"
          //?? maybe this should be more sophisticated than simple toggling of selection
          click: function(e, item) {
            // assume "transparent" means not "selected", for items
            var oldskips = item.diagram.skipsUndoManager;
            item.diagram.skipsUndoManager = true;
            if (item.background === "transparent") {
              item.background = "dodgerblue";
            } else {
              item.background = "transparent";
            }
            item.diagram.skipsUndoManager = oldskips;
          }
        },
        $(
          go.TextBlock,
          {
            margin: 5,
            column: 1,
            stroke: "#6E6D73",
            font: "13px sans-serif",
            editable: true,
            // and disallow drawing links from or to this text:
            fromLinkable: false,
            toLinkable: false
          },
          new go.Binding("text", "name").makeTwoWay()
        ),
        $(
          go.TextBlock,
          { margin: new go.Margin(0, 2), column: 2, font: "13px sans-serif" },
          new go.Binding("text", "info")
        )
      );    
   
}())
