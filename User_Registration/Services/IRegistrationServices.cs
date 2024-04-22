using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using User_Registration.Models;

namespace User_Registration.Services
{
    public interface IRegistrationServices
    {
        /// <summary>
        /// get list of all Users
        /// </summary>
        /// <returns></returns>
        List<Users> GetUsersList();

        /// <summary>
        /// get user details by user id
        /// </summary>
        /// <param name="userId"></param>
        /// <returns></returns>
        Users GetUserDetailsById(int userId);

        /// <summary>
        ///  add edit users
        /// </summary>
        /// <param name="userModel"></param>
        /// <returns></returns>
        ResponseModel SaveUser(Users userModel);


        /// <summary>
        /// delete user
        /// </summary>
        /// <param name="userid"></param>
        /// <returns></returns>
        ResponseModel DeleteUser(int userId);
    }
}
