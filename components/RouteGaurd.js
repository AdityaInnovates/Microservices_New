import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export { RouteGuard };

function RouteGuard({ children }) {
    const router = useRouter();
    const [authorized, setAuthorized] = useState(false);

    useEffect(() => {
        authCheck(router.asPath);
    }, []);

    function authCheck(url) {
        // redirect to login page if accessing a private page and not logged in 
        const publicPaths = ['/callback'];
        const path = url.split('?')[0];
        let user = localStorage.getItem('access_token');
        if (user){
            user = JSON.parse(user);
        }
        if (!user && !publicPaths.includes(path)) {
            setAuthorized(false);
            window.location.href = "https://myid.siemens.com/as/authorization.oauth2?client_id=822f891a-030c-46b6-b2af-5e609d01fdcb&response_type=code";
        } else {
            setAuthorized(true);
        }    
        

    }

    return (authorized && children);
}