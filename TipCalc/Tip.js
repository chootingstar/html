var nice = 0.00;

function price {
    var bill = document.getElementById("bill").value;
    var service = document.getElementById("service").value /100;
    var friend = document.getElementById("friend");
    nice = bill * service / friend;
}

function done{
    document.getElementById("result").write("$" + nice);
}