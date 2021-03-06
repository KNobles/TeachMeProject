﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

using TeachMeAPI.Models;
using TeachMeAPI.DAO;

namespace TeachMeAPI.Controllers
{
    [Authorize(Roles ="Admin")]
    public class AdministratorController : ApiController
    {
        public List<Administrator> GetAll()
        {
            return AdministratorDAO.Query();
        }

        public Administrator Post(Administrator admin)
        {
            return AdministratorDAO.Insert(admin);
        }

        public Administrator Get(int id)
        {
            return AdministratorDAO.Get(id);
        }

        public Administrator Get(String username, String password)
        {
            return AdministratorDAO.Get(username, password);
        }

        public IHttpActionResult Delete(int id)
        {
            if (AdministratorDAO.Delete(id))
            {
                return Ok();
            }
            return BadRequest();
        }

        public IHttpActionResult Put(Administrator admin)
        {
            if (AdministratorDAO.Update(admin))
            {
                return Ok();
            }
            return BadRequest();
        }
    }
}
