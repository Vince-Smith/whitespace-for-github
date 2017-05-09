function textNodesUnder(node){
  var n;
  var a = [];
  var walk = document.createTreeWalker(node, NodeFilter.SHOW_TEXT, null, false);

while ( n = walk.nextNode() )
  {
    a.push(n);
  }
  return a;
}

function replaceWhiteSpace(nodeArray)
{
  for (var i = 0; i < nodeArray.length; i++) {
      var s = nodeArray[i].data;
      s = s.replace(/ /g, '·').replace(/\t/g, "⇥\t").replace(/\r\n|\r|\n/g, "↩");

      var sp1 = document.createElement("span");
      sp1.id = "test";
      sp1.innerHTML = s;
      nodeArray[i].parentNode.replaceChild(nodeArray[i], sp1);
  }
}

var blobs = document.getElementsByClassName('blob-code-inner');

for (var i = 0; i < blobs.length; i++)
{
    replaceWhiteSpace(textNodesUnder(blobs[i]));
}
