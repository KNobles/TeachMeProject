using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

using TeachMeAPI.Models;
using TeachMeAPI.DAO;

namespace TeachMeAPI.Controllers
{
    public class BlackListTutorController : ApiController
    {
        [Authorize]
        public List<BlackListTutor> GetAll()
        {
            return BlackListTutorDAO.Query();
        }

        [Authorize(Roles ="Admin")]
        public BlackListTutor Post(BlackListTutor black)
        {
            return BlackListTutorDAO.Insert(black);
        }

        [Authorize]
        public BlackListTutor Get(int id)
        {
            return BlackListTutorDAO.Get(id);
        }

        [Authorize(Roles = "Admin")]
        public IHttpActionResult Delete(int id)
        {
            if (BlackListTutorDAO.Delete(id))
            {
                return Ok();
            }
            return BadRequest();
        }

        [Authorize(Roles = "Admin")]
        public IHttpActionResult Put(BlackListTutor black)
        {
            if (BlackListTutorDAO.Update(black))
            {
                return Ok();
            }
            return BadRequest();
        }
    }
}
