document.addEventListener("DOMContentLoaded", function () {

    // 왼 사이드바를 삽입할 위치
    const leftSidebarContainer = document.querySelector("#left-sidebar");

    if (leftSidebarContainer) {
        fetch("../left_sidebar.html")
            .then(response => response.text())
            .then(data => {
                leftSidebarContainer.innerHTML = data;

                
                const payload = localStorage.getItem("payload");
                const payload_parse = JSON.parse(payload);
                intro.innerText = `${payload_parse.nickname}`;
                intro.href = `${frontend_base_url}/user/profile.html?user_id=` + payload_parse.user_id;

                let navbarRight = document.getElementById("navbar-right");
                let newLi = document.createElement("li");
                newLi.setAttribute("class", "nav-item");

                let logoutBtn = document.createElement("a");
                logoutBtn.setAttribute("class", "nav-link btn");
                logoutBtn.innerText = "로그아웃";
                logoutBtn.setAttribute("href", "#");

                logoutBtn.setAttribute("onclick", "confirmLogout()");


                newLi.appendChild(logoutBtn);

                navbarRight.appendChild(newLi);
            

                let loginbtn = document.getElementById("login-btn");
                let signupbtn = document.getElementById("signup-btn");

                let createbtn = document.getElementById('create-article')
                if (loginbtn) {
                    loginbtn.style.display = "none";
                    createbtn.style.display="block";
                    signupbtn.style.display = "none";
                }
            })
            .catch(error => {
                console.error("사이드바를 불러오는데 오류가 발생했습니다.", error);
            });
    } 

})

