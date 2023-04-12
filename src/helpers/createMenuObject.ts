type MenuOptions = '' | 'all' | 'dog' | 'cat' | 'fish';

export const createMenuObject = (activeItem : MenuOptions) => {
    let returnObject = {
        all : false,
        dog : false,
        cat : false,
        fish: false
    };

    if (activeItem !== ''){
        returnObject[activeItem] = true;
    }

    return returnObject;    
}