export default function Login() {
    function kirish() {
        let ism = document.getElementById("ism").value;
        let parol = document.getElementById("parol").value;

        if (ism == "" || parol == "") {
            alert("To'ldiring");
        } else {
            alert("RAHMAT Tez orada Ezyrox kompaniyasi  siz bilan bog'lanadi ");
            document.getElementById("ism").value = "";
            document.getElementById("parol").value = "";
        }
    }

    return (
        <div className="login_box">
            <h2>Login</h2>
            <input id="ism" placeholder="Ism" />
            <input id="parol" placeholder="telefon raqaminigizni kiriting" />
            <button onClick={kirish}>sotib olish</button>
        </div>
    );
}