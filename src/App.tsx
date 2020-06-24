import React from 'react';
import './App.css';
import image from './logo.png';
import Blockly from 'node-blockly/browser';

function App() {
  React.useEffect(() => {
    var editor: any;
    var xmlText = `<xml xmlns="http://www.w3.org/1999/xhtml">
        <block type="variables_set">
            <field name="VAR">blockly</field>
            <value name="VALUE">
                <block type="text">
                    <field name="TEXT">Hello BioWave!</field>
                </block>
            </value>
        </block>
    </xml>`;

    try {
        var code = Blockly.Xml.textToDom(xmlText);
    }
    catch (e) {
        console.log(e);
        return
    }

    function render(element: any, toolbox: any, newCode: any) {
      var dom = code;
      if (editor) {
        // editor.removeChangeListener(updateCode);
        if (!newCode) {
          dom = Blockly.Xml.workspaceToDom(editor, true);
        }
        editor.dispose()
      }
      editor = Blockly.inject(element, {
        toolbox: document.getElementById(toolbox)
      })

      Blockly.Xml.domToWorkspace(dom, editor);

      // editor.addChangeListener(updateCode);

      return editor
    }

    /*function updateCode() {
      document.getElementById('js').childNodes[0].innerText = Blockly.JavaScript.workspaceToCode(editor)
      document.getElementById('php').childNodes[0].innerText = Blockly.PHP.workspaceToCode(editor)
      document.getElementById('lua').childNodes[0].innerText = Blockly.Lua.workspaceToCode(editor)
      document.getElementById('dart').childNodes[0].innerText = Blockly.Dart.workspaceToCode(editor)
      document.getElementById('python').childNodes[0].innerText = Blockly.Python.workspaceToCode(editor)
      document.getElementById('xml').childNodes[0].innerText = Blockly.Xml.domToPrettyText(Blockly.Xml.workspaceToDom(editor))

      document.querySelectorAll('pre code').forEach((block) => {
        hljs.highlightBlock(block);
      });
    }*/

    editor = render('editor', 'toolbox', '');

    // updateCode();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={image} className="App-logo" alt="logo" />
        <div className="title">BioWave</div>
      </header>
      <div id="editor" style={{height: "480px", width: "600px"}}></div>
      <div id="toolbox" style={{height: "480px", width: "600px"}}></div>
    </div>
  );
}

export default App;

/*

var xmlText = `<xml xmlns="http://www.w3.org/1999/xhtml">
        <block type="variables_set">
            <field name="VAR">blockly</field>
            <value name="VALUE">
                <block type="text">
                    <field name="TEXT">Hello Node.js!</field>
                </block>
            </value>
        </block>
    </xml>`;
 
    try {
      var xml = Blockly.Xml.textToDom(xmlText);
  }
  catch (e) {
      console.log(e);
  }
*/