namespace UniversityApplicantAPI.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddingApplicatntResumeProp : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Applicants", "ApplicantResume", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.Applicants", "ApplicantResume");
        }
    }
}
