function Mobile (company,model,price,color){
    this.company = company;
    this.model = model;
    this.price = price;
    this.color = color;
}
var myMobile = new Mobile("Samsung","S6",28000,"Golden");
alert("My Mobile Price is: " +myMobile.price+'.');