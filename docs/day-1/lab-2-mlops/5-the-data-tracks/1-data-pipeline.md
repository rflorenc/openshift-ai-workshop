# Data Pipeline (tiny ETL)

Before we start versioning the data, we need to have it somewhere we control. Besides GitHub not being the best place for storing data, because of the max storage limit they have, we may also want to store it inside our cluster.

For this, we will have a S3 bucket that can hold our data, and we will version the data inside that bucket.

Let's start by moving some data into the bucket.

1. Go to `OpenShift AI Dashboard` >  `Projects` > `<USER_NAME>-jukebox` > `Workbenches` and connect to your first Jupyter notebook workbench, the one running `Jupyter | Data Science` Notebook image.

    Open up `jukebox/5-data-versioning/1-data_pipeline_url_to_s3.py` file. This pipeline will move the song properties data we currently have in GitHub over to our S3 bucket `data`. 
    
    

    Click ▶️ on Run button to start the pipeline.

    ![data-pipeline.png](./images/data-pipeline.png)

    This will trigger the pipeline that you can view on `OpenShift AI Dashboard` > `Pipelines` > `Runs` in your `<USER_NAME>-jukebox` project.

    ![etl-pipeline.png](./images/etl-pipeline.png)

    Let's wait for it to complete successfully.

    ![etl-pipeline-2.png](./images/etl-pipeline-2.png)
