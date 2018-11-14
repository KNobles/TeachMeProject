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
    public class CourseController : ApiController
    {
        public List<Course> GetAll()
        {
            return CourseDAO.Query();
        }

        public Course Post(Course course)
        {
            return CourseDAO.Insert(course);
        }

        public Course Get(int id)
        {
            return CourseDAO.Get(id);
        }

        public IHttpActionResult Delete(int id)
        {
            if (CourseDAO.Delete(id))
            {
                return Ok();
            }
            return BadRequest();
        }

        public IHttpActionResult Put(Course course)
        {
            if (CourseDAO.Update(course))
            {
                return Ok();
            }
            return BadRequest();
        }
    }
}