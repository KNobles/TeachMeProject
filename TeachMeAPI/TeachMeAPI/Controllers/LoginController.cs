﻿using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.IO;
using System.Net;
using System.Net.Http;
using System.Security.Claims;
using System.Web;
using System.Web.Http;

using TeachMeAPI.Util;
using TeachMeAPI.DAO;
using TeachMeAPI.Models;

namespace TeachMeAPI.Controllers
{
    public class LoginController : ApiController
    {
        [System.Web.Http.HttpPost]
        public IHttpActionResult Authenticate([FromBody] LoginRequest login)
        {
            var loginResponse = new LoginResponse { };
            LoginRequest loginrequest = new LoginRequest { };
            loginrequest.Username = login.Username.ToLower();
            loginrequest.Password = login.Password;

            IHttpActionResult response;
            HttpResponseMessage responseMsg = new HttpResponseMessage();
            bool isUsernamePasswordValid = false;

            if (login != null)
            {
                isUsernamePasswordValid = EleveDAO.Get(loginrequest.Username, loginrequest.Password) != null ? true : false;
                if (isUsernamePasswordValid)
                {
                    loginResponse.role = "Eleve";
                    loginResponse.id = EleveDAO.Get(loginrequest.Username, loginrequest.Password).IdEleve;
                }
                    
                if (!isUsernamePasswordValid)
                {
                    isUsernamePasswordValid = TutorDAO.Get(loginrequest.Username, loginrequest.Password) != null ? true : false;
                    if (isUsernamePasswordValid)
                    {
                        loginResponse.role = "Tutor";
                        loginResponse.id = TutorDAO.Get(loginrequest.Username, loginrequest.Password).IdTutor;
                    }
                        
                }                
                if (!isUsernamePasswordValid)
                {
                    isUsernamePasswordValid = AdministratorDAO.Get(loginrequest.Username, loginrequest.Password) != null ? true : false;
                    if (isUsernamePasswordValid)
                    {
                        loginResponse.role = "Admin";
                        loginResponse.id = AdministratorDAO.Get(loginrequest.Username, loginrequest.Password).IdAdmin;
                    }
                        
                }
                    

            }
                
            // if credentials are valid
            if (isUsernamePasswordValid)
            {
                string token = createToken(loginrequest.Username, loginrequest.role);
                //return the token
                return Ok<string>(token);
            }
            else
            {
                // if credentials are not valid send unauthorized status code in response
                loginResponse.responseMsg.StatusCode = HttpStatusCode.Unauthorized;
                response = ResponseMessage(loginResponse.responseMsg);
                return response;
            }
        }

        private string createToken(string username, string role)
        {
            //Set issued at date
            DateTime issuedAt = DateTime.UtcNow;
            //set the time when it expires
            DateTime expires = DateTime.UtcNow.AddDays(7);

            //http://stackoverflow.com/questions/18223868/how-to-encrypt-jwt-security-token
            var tokenHandler = new JwtSecurityTokenHandler();

            //create a identity and add claims to the user which we want to log in
            ClaimsIdentity claimsIdentity = new ClaimsIdentity(new[]
            {
                new Claim(ClaimTypes.Name, username, ClaimTypes.Role, role)
     
                
            });
            
           
            const string sec = "401b09eab3c013d4ca54922bb802bec8fd5318192b0a75f201d8b3727429090fb337591abd3e44453b954555b7a0812e1081c39b740293f765eae731f5a65ed1";
            var now = DateTime.UtcNow;
            var securityKey = new Microsoft.IdentityModel.Tokens.SymmetricSecurityKey(System.Text.Encoding.Default.GetBytes(sec));
            var signingCredentials = new Microsoft.IdentityModel.Tokens.SigningCredentials(securityKey, Microsoft.IdentityModel.Tokens.SecurityAlgorithms.HmacSha256Signature);


            //create the jwt
            var token =
                (JwtSecurityToken)
                    tokenHandler.CreateJwtSecurityToken(issuer: "http://localhost:50191", audience: "http://localhost:50191",
                        subject: claimsIdentity, notBefore: issuedAt, expires: expires, signingCredentials: signingCredentials);
            var tokenString = tokenHandler.WriteToken(token);

            return tokenString;
        }

    }
}