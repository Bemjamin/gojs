var recordTemplate = (function() {
    return $(
        go.Node,
        "Auto",
        new go.Binding("location", "loc", go.Point.parse).makeTwoWay(
          go.Point.stringify
        ),
        // this rectangular shape surrounds the content of the node
        $(go.Shape, { fill: "#EEEEEE",  stroke: "#C6C6C6" }),
        // the content consists of a header and a list of items
        $(go.Panel,
          "Vertical",
          // this is the header for the whole node
          $(go.Panel,
            "Auto",
            { stretch: go.GraphObject.Horizontal }, // as wide as the whole node
            $(go.Shape, { fill: $(go.Brush, "Linear", { 0.0: "#67C490", 1.0: "#6DC793" } ), stroke: "#6E6D73" }),
            $(go.TextBlock, {
                alignment: go.Spot.Center,
                editable: true,
                margin: 5,
                stroke: "white",
                textAlign: "center",
                font: "11pt verdana"
              }, new go.Binding("text", "key")
            )
          ), //END HEADER
          // this Panel holds a Panel for each item object in the itemArray;
          // each item Panel is defined by the itemTemplate to be a TableRow in this Table
          $(go.Panel,
            "Table",
            {
              name: "TABLE",
              padding: 2,
              margin: 5,
              minSize: new go.Size(100, 10),
              defaultStretch: go.GraphObject.Horizontal,
              itemTemplate: fieldTemplate
            },
            new go.Binding("itemArray", "fields")
          ),
          {
            contextMenu: $("ContextMenu", makeButton("New Field", function(e, obj){
              var currentDiagram = e.targetDiagram;
              var currentNode = obj.part.adornedPart;
              currentDiagram.startTransaction("addnewfield")
              currentDiagram.model.addArrayItem(currentNode.data.fields, { "name":"field5" })
              currentDiagram.commitTransaction("addnewfield")
            }))
          } // end Table Panel of items
        ), // end Vertical Panel
        
      ); // end Node

}());