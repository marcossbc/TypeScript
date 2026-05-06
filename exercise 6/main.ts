// type Role = "admin" | "editer" | "user";


// enum Role {
//     Admin = "admin",
//     Editor = "editor",
//     User = "user"
// }
// function getRole(role: Role) {
//     if(role === Role.Admin){
//         console.log("You are an admin");
//     }
//     // console.log(`Role: ${role}`);
// }
// getRole(Role.Admin);
// getRole(Role.Editor);
// getRole(Role.User);

enum UserRole {
    Admin = "superAdmin",
    user = "monetor",
    viewer = "viewer"
}

function canEdit(role: UserRole) {
    if(role === UserRole.viewer ){
        console.log("You can only view content");
    }
}
canEdit(UserRole.Admin);
canEdit(UserRole.user);
canEdit(UserRole.viewer);

const btn = document.querySelector("button") as HTMLButtonElement;
btn.disabled = true