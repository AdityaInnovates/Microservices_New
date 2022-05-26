import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Callback(props) {
    const router = useRouter();

    useEffect(() => {
        let code = window.location.href.split("code=")[1];
        var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
            myHeaders.append("Cookie", "INGRESSCOOKIE=1652703476.955.914.532352|8bfe019b4eff9f7afa133c30374eff2a; PF=tnK1h229HSHP231WqH1bS0");

            var urlencoded = new URLSearchParams();
            urlencoded.append("grant_type", "authorization_code");
            urlencoded.append("code", code);
            urlencoded.append("client_secret", "IjDuI6RmGPFsGvNjpA");
            urlencoded.append("client_id", "822f891a-030c-46b6-b2af-5e609d01fdcb");

            var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: urlencoded,
            redirect: 'follow'
            };

        fetch("https://myid.siemens.com/as/token.oauth2", requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result)
            localStorage.setItem("access_token", JSON.stringify(result))
            router.push({
                pathname: '/'
            });
        })
        .catch(error => console.log('error', error));
            }, []);

    

    return (
        <div className="col-md-6 offset-md-3 mt-5">
            <p>Validating...</p>
        </div>
    )
}