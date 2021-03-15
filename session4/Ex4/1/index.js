let data = {
    debug: 'The process of figuring out why your program has a certain error and how to fix it',
    done: 'When your task is complete, the only thing you have to do is to wait for users to use it (no additional codes or actions needed)',
    defect: "The formal word for 'error' ",
    pm: 'The short version of Project Manager, the person in charge of the final result of a project',
    uiUx: 'UI means User Interface, UX mean User Experience, are the process to define how your products looks and feels',
};
alert('Hi there, this is dev dictionary');

while(true){
    let input = prompt('Enter a keyworld');
    if(data[input]){
        alert(`${input}\n ${data[input]}`);
    }else{
        let input2 = prompt(`We could not find your word: ${input}, leave your explanation`);
        data[input] = input2
        alert('Done');
    }
}
