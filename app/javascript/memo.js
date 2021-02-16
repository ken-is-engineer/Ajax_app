function memo() {
  const submit = document.getElementById("submit");
  submit.addEventListener("click", (e) => {
    const formData = new FormData(document.getElementById("form"));   //新しいモデルクラス作成と同じ考え方だから先頭大文字？
    const XHR = new XMLHttpRequest();                                 //これで新たなインスタンスをクラスに作成している、的な感覚？
    XHR.open("POST", "/posts", true);                                 //HTTPメソッドを、URLに実行？非同期通信ON
    XHR.responseType = "json";                                        //XMLといいつつどのデータ形式も扱える。
    XHR.send(formData);                                               //formDataの内容を送信。checkedは空送信？→送信したかどうかが大事。
    XHR.onload = () => {
      if (XHR.status != 200) {
        alert(`Error ${XHR.status}: ${XHR.statusText}`);
        return null;
      }
      const item = XHR.response.post;                                 //この.postはcreateアクションで定義したもの
      const list = document.getElementById("list");
      const formText = document.getElementById("content");
      const HTML = `
        <div class="post" data-id=${item.id}>
          <div class="post-date">
            投稿日時：${item.created_at}
          </div>
          <div class="post-content">
          ${item.content}
          </div>
        </div>`;
      list.insertAdjacentHTML("afterend", HTML);
      formText.value = "";
    };
    e.preventDefault();
  });
}
window.addEventListener("load", memo);