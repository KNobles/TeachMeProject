using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using TeachMeAPI.Models;

namespace TeachMeAPI.Controllers
{
    public class TutorController : ApiController
    {
        [Authorize]
        public List<Tutor> GetAll()
        {
            return DAO.TutorDAO.Query();
        }

        public Tutor Post(Tutor user)
        {
            return DAO.TutorDAO.Insert(user);
        }
        [Authorize]
        public Tutor Get(int id)
        {
            return DAO.TutorDAO.Get(id);
        }

       // [Authorize]
        public Tutor Get(String username, String password)
        {
            return DAO.TutorDAO.Get(username, password);
        }

        [Authorize]
        public IHttpActionResult Delete(int idTutor)
        {
            if (DAO.TutorDAO.Delete(idTutor))
            {
                return Ok();
            }
            return BadRequest();
        }

        [Authorize]
        public IHttpActionResult Put(Tutor tutor)
        {
            if (DAO.TutorDAO.Update(tutor))
            {
                return Ok();
            }
            return BadRequest();
        }


    }
}
