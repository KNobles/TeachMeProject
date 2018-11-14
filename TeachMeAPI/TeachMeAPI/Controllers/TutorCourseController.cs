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
        public List<TutorCourse> GetAll()
        {
            return TutorCourseDAO.Query();
        }

        public TutorCourse Post(TutorCourse tutorCourse)
        {
            return TutorCourseDAO.Insert(tutorCourse);
        }

        public TutorCourse Get(int id)
        {
            return TutorCourseDAO.Get(id);
        }

        public IHttpActionResult Delete(int id)
        {
            if (TutorCourseDAO.Delete(id))
            {
                return Ok();
            }
            return BadRequest();
        }

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
