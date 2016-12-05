function Contact(first, last) {
    this.firstName = first;
    this.lastName = last;
}
Contact.prototype.fullname = function() {
    return this.firstName + " " + this.lastName;
}
$(document).ready(function() {
    $("form#new-contact").submit(function(event) {
        event.preventDefault();
        var inputtedFirstName = $("input#new-first-name").val();
        var inputtedLastName = $("input#new-last-name").val();
        var newContact = new Contact(inputtedFirstName, inputtedLastName);
        $("ul#contacts").append("<li><span class='contact'>" + newContact.fullname() + "</span></li>");
        $(".contact").last().click(function functionName() {
            $("#show-contact").show();
            $("#show-contact h2").text(newContact.firstName);
            $(".first-name").text(newContact.firstName);
            $(".last-name").text(newContact.lastName);
        });
    });
});
