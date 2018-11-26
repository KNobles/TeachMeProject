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
    public class AnnouncementController : ApiController
    {
        [Authorize]
        public List<Announcement> GetAll()
        {
            return AnnouncementDAO.Query();
        }

        [Authorize(Roles ="Tutor")]
        public Announcement Post(Announcement announce)
        {
            return AnnouncementDAO.Insert(announce);
        }

        [Authorize]
        public Announcement Get(int id)
        {
            return AnnouncementDAO.Get(id);
        }

        [Authorize(Roles = "Admin")]
        public IHttpActionResult Delete(int id)
        {
            if (AnnouncementDAO.Delete(id))
            {
                return Ok();
            }
            return BadRequest();
        }

        [Authorize(Roles = "Admin")]
        public IHttpActionResult Put(Announcement announce)
        {
            if (AnnouncementDAO.Update(announce))
            {
                return Ok();
            }
            return BadRequest();
        }
    }
}
