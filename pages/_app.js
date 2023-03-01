import '../styles/globals.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import Script from 'next/script';
function MyApp({ Component, pageProps }) {
useEffect(()=>{
        import("bootstrap/dist/js/bootstrap");
},[])
  return (
<>

<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js" integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossorigin="anonymous"/>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.min.js" integrity="sha384-mQ93GR66B00ZXjt0YO5KlohRA5SY2XofN4zfuZxLkoj1gXtW8ANNCe9d5Y3eG5eD" crossorigin="anonymous"/>
<Component {...pageProps} />
</>
);
}

export default MyApp
