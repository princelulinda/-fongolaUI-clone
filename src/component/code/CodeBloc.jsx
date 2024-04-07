import SyntaxHighlighter from 'react-syntax-highlighter';
import React, { useState } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {nord } from 'react-syntax-highlighter/dist/esm/styles/hljs';


export default function CodeBloc({ language, code, ...props }) {
    const [copied, setCopied] = useState(false);
    
    const handleCopy = () => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    };
    return (

           <div className='relative w-[95%] my-6'>
            <SyntaxHighlighter language='javascript' style={nord} showLineNumbers={true} showInlineLineNumbers={true}>
           {code}

        </SyntaxHighlighter>
          <CopyToClipboard text={code} >
          <button onClick={handleCopy} className='absolute top-0 right-0 p-3 text-white justify-center items-center'>
        {copied?<i class="bi bi-check-lg"></i>:<i class="bi bi-clipboard"></i>}
        </button>
          </CopyToClipboard>
          </div>
      );
}
