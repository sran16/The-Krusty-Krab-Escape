<?php


?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <div class="test">
    </div>

</body>

</html>
<script>

    // function getTestName() {
    //     fetch("getName.php")
    //         .then((response) => {
    //             if (!response.ok) {
    //                 throw new Error("Something went wrong !");
    //             }
    //             let parsedResponse = response.json();
    //             return parsedResponse
    //         })
    //         .then((data) => {
    //             console.log(data);
    //             return data;
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    // }
    // getTestName();
    function createNewName(testName) {
        let url = "createNewName.php";
        let formData = new FormData();
        formData.append("name", testName);
        fetch(url, { method: 'post', body: formData })
            .then((response) => {
                console.log(response.text);
                return response.text
            })
    }
    const unTexte = "narnar";
    createNewName(unTexte);
</script>