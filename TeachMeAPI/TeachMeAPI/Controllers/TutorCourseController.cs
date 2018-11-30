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
    public class TutorCourseController : ApiController
    {
        [Authorize]
        public List<TutorCourse> GetAll()
        {
            return TutorCourseDAO.Query();
        }
        [Authorize(Roles ="Tutor")]
        public TutorCourse Post(TutorCourse tutorCourse)
        {
            return TutorCourseDAO.Insert(tutorCourse);
        }

        [Authorize]
        public TutorCourse Get(int id)
        {
            return TutorCourseDAO.Get(id);
        }

        [Authorize(Roles = "Admin")]
        public IHttpActionResult Delete(int id)
        {
            if (TutorCourseDAO.Delete(id))
            {
                return Ok();
            }
            return BadRequest();
        }

        [Authorize(Roles = "Admin")]
        public IHttpActionResult Put(TutorCourse tutorCourse)
        {
            if (TutorCourseDAO.Update(tutorCourse))
            {
                return Ok();
            }
            return BadRequest();
        }
    }
}
