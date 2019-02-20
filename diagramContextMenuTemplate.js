var diagramContextMenu = (function(){
    return $("ContextMenu",
                $("ContextMenuButton", $(go.TextBlock, "New DataSet"), {
                click: function(e, obj) {
                    e.diagram.commit(function(d) {
                    var data = { key: "New DataSet", fields: [] };
                    d.model.addNodeData(data);
                    part = d.findPartForData(data); // must be same data reference, not a new {}
                    // set location to saved mouseDownPoint in ContextMenuTool
                    part.location = d.toolManager.contextMenuTool.mouseDownPoint;
                    }, "new node");
                }
                }),
                $("ContextMenuButton", $(go.TextBlock, "New Rule"), {
                click: function(e, obj) {
                    e.diagram.commit(function(d) {
                    var data = { key: "New Rule", fields: [] };
                    d.model.addNodeData(data);
                    part = d.findPartForData(data); // must be same data reference, not a new {}
                    // set location to saved mouseDownPoint in ContextMenuTool
                    part.location = d.toolManager.contextMenuTool.mouseDownPoint;
                    }, "new rule");
                }
                })
            );
}());