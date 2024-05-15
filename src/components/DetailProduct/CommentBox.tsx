'use client'
import { useEffect } from 'react';

function CommentBox() {
  useEffect(() => {
    // Load SDK của Facebook
    (window as any).fbAsyncInit = function() {
      (window as any).FB.init({
        xfbml: true,
        version: 'v19.0'
      });
    };
    // Tải SDK của Facebook
    (function(d, s, id) {
      var js: HTMLScriptElement, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s) as HTMLScriptElement; // Cụ thể hóa kiểu thành HTMLScriptElement
      js.id = id;
      js.src = 'https://connect.facebook.net/vi_VN/sdk.js';
      if(fjs && fjs.parentNode) fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }, []);

  return (
    <div className="fb-comments" data-href="https://facebook.com" data-width="100%" data-numposts={1} />
  );
}

export default CommentBox;
