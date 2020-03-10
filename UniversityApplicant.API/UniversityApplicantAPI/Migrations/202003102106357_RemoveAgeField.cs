namespace UniversityApplicantAPI.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class RemoveAgeField : DbMigration
    {
        public override void Up()
        {
            DropColumn("dbo.Applicants", "Age");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Applicants", "Age", c => c.Int());
        }
    }
}
