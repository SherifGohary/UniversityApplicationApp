using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;
using UniversityApplicantAPI.Enums;

namespace UniversityApplicantAPI.Models
{
    public class ApplicantEducation
    {
        [Key]
        public Guid Id { get; set; }
        public Guid ApplicantId { get; set; }


        [ForeignKey(nameof(ApplicantId))]
        public virtual Applicant Applicant { get; }
    }
}