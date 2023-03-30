$(document).ready(function () {
    $('#submit').click(function (event) {
        event.preventDefault();

        var name_err = false;
        var org_name_err = false;
        var mobile_err = false;
        var email_err = false;

        var nameReg = /^[A-Za-z]+$/;
        var mobileReg = /^\d{10}$/;
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

        var name = $('#name').val();
        var mobile = $('#phone').val();
        var email = $('#email').val();
        var message = $('#message').val();
        var orgName = $('#org_name').val();


        if (name == '') {
            $('#name_err_container').html('Name Field is required');
            name_err = true;
            setTimeout(() => {
                $('#name_err_container').html('');
            }, 2000)
        }
        else if (!nameReg.test(name)) {
            $('#name_err_container').html('Enter Your Valid Name');
            name_err = true;
            setTimeout(() => {
                $('#name_err_container').html('');
            }, 2000)
        }
        else {
            name_err = false;
        }
        if (mobile == '') {
            $('#phone_err_container').html('Contact Field is required');
            mobile_err = true;
            setTimeout(() => {
                $('#phone_err_container').html('');
            }, 2000)
        }
        else if (!mobileReg.test(mobile)) {
            $('#phone_err_container').html('Enter Your Valid Mobile Number');
            mobile_err = true;
            setTimeout(() => {
                $('#phone_err_container').html('');
            }, 2000)
        }
        else {
            mobile_err = false;
        }
        if (email == '') {
            $('#email_err_container').html('Email Field is required');
            email_err = true;
            setTimeout(() => {
                $('#email_err_container').html('');
            }, 2000)
        }
        else if (!emailReg.test(email)) {
            $('#email_err_container').html('Enter Your Valid Email Address');
            email_err = true;
            setTimeout(() => {
                $('#email_err_container').html('');
            }, 2000)
        }
        else {
            email_err = false;
        }
        if (orgName == '') {
            $('#org_name_err_container').html('Organisation Name is required');
            org_name_err = true;
            setTimeout(() => {
                $('#org_name_err_container').html('');
            }, 2000)
        }
        else {
            org_name_err = false;
        }
        if ((name_err == false) && (email_err == false) && (org_name_err == false) && (mobile_err == false)) {
            $.ajax({
                type: "POST",
                url: "./response.php",
                data: { "name": name, "phone": mobile, "email": email, "message": message },
                success: function (data) {
                    $('.result').html('Your Form Submitted Successfully');
                    $('#name').val("");
                    $('#phone').val("");
                    $('#email').val("");
                    $('#message').val("");
                },

            });
        }
        else {
            return false;
        }
    });
});
