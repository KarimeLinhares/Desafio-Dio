function getAdmins(map) {
    let admins = [];
    for ([key, value] of map) {
        if (value === 'Admin') {
            admins.push(key);
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Ana', 'Admin');
usuarios.set('Paulo', 'Admin');
usuarios.set('Jorge', 'User');
usuarios.set('Maria', 'User');
usuarios.set('Carla', 'Admin');
usuarios.set('João', 'Admin');

console.log(getAdmins(usuarios));
