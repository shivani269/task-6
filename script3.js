function greet() {
    return 'hey';
}
function Fun(user, func)
{
    const message = func();
    console.log('${message} ${user}');
}
Fun('Joe',greet);
Fun('Jack',greet);
Fun('Sara',greet);