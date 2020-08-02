import React from 'react';
import './Main.css';
import Blockly from 'node-blockly/browser';

function MainPage() {
  const [editor, setEditor] = React.useState({});  
  const [height, setHeight] = React.useState(480);
  const [xml, setXml] = React.useState<XMLDocument>();
  var toolbox = `<xml id="toolbox" style="display: none">
    <category name="Control">
      <block type="controls_if"></block>
      <block type="controls_whileUntil"></block>
      <block type="controls_for"></block>
    </category>
    <category name="Logic">
      <block type="logic_compare"></block>
      <block type="logic_operation"></block>
      <block type="logic_boolean"></block>
    </category>
  </xml>`;

  React.useEffect(() => {
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
        setXml(Blockly.Xml.textToDom(xmlText));
    }
    catch (e) {
        console.log(e);
        return
    }
    setHeight(window.innerHeight / 10 * 9);
  }, []);

  function render(element: any, toolbox: any, newCode: any, editor: any) {
    var dom = xml;
    if (editor.dispose) {
      // editor.removeChangeListener(updateCode);
      if (!newCode) {
        dom = Blockly.Xml.workspaceToDom(editor, true);
        console.log(typeof dom);
      }
      editor.dispose()
      const tgt = document.getElementById('editor');
      if(tgt) { tgt.innerHTML = ""; }
    }

    editor = Blockly.inject(element, {
      toolbox: toolbox,
      scrollbars: false
    });

    Blockly.Xml.domToWorkspace(dom, editor);

    return editor;
  }

  function codeUpdate() {
    if(! (editor as any).dispose) return;
    var dom;
    dom = Blockly.Xml.workspaceToDom(editor, true);
    return dom;
  }

  async function alertCode() {
    if(! (editor as any).dispose) return;
    const it = Blockly.Xml.workspaceToDom(editor, true);
    alert(JSON.stringify(it.outerHTML));
  }

  React.useEffect(() => {
    console.log("runEditer", height);
    if(xml) {
      setEditor(render('editor', toolbox, '', editor));
    }
    // eslint-disable-next-line
  }, [height, xml]);

  return (
    <div className="Main">
      <div id="editor" style={{height: `${height}px`, width: "100%"}}></div>
      <button className="expand butt" onClick={() => {setHeight(height + 200)}}>확장</button>
      <button className="save butt" onClick={codeUpdate}>저장</button>
      <button className="code butt" onClick={alertCode}>실행</button>
    </div>
  );
}

export default MainPage;
