﻿using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Http.Description;
using UniversityApplicantAPI.Models;

namespace UniversityApplicantAPI.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class ApplicantsController : ApiController
    {
        private ApplicantDB db = new ApplicantDB();

        // GET: api/Applicants
        public IQueryable<Applicant> GetApplicants()
        {
            return db.Applicants;
        }

        // GET: api/Applicants/5
        [ResponseType(typeof(Applicant))]
        public async Task<IHttpActionResult> GetApplicant(Guid id)
        {
            Applicant applicant = await db.Applicants.FindAsync(id);
            if (applicant == null)
            {
                return NotFound();
            }
            applicant.Age = DateTime.Now.Year - applicant.BirthDate.Year;
            return Ok(applicant);
        }

        [HttpPost]
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> EditApplicant(Applicant applicant)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }


            db.Entry(applicant).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ApplicantExists(applicant.Id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Applicants
        [HttpPut]
        [ResponseType(typeof(Applicant))]
        public async Task<IHttpActionResult> AddApplicant([FromBody] Applicant applicant)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            applicant.Id = Guid.NewGuid();
            db.Applicants.Add(applicant);

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (ApplicantExists(applicant.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = applicant.Id }, applicant);
        }

        // DELETE: api/Applicants/5
        [ResponseType(typeof(Applicant))]
        public async Task<IHttpActionResult> DeleteApplicant(Guid id)
        {
            Applicant applicant = await db.Applicants.FindAsync(id);
            if (applicant == null)
            {
                return NotFound();
            }

            db.Applicants.Remove(applicant);
            await db.SaveChangesAsync();

            return Ok(applicant);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool ApplicantExists(Guid id)
        {
            return db.Applicants.Count(e => e.Id == id) > 0;
        }
    }
}