//here, you define the blueprint of your collections 

//import defineCollection function from astro's content collections api
import { defineCollection } from "astro:content";

//import zod from the api 
import { z } from "astro:content"; 

const students = defineCollection({
//schema/blueprint
    type: "data" , //only two type of data collections - data and content 
    schema : z.object({
        name : z.string(),
        grade : z.enum(['1', '2', '3', '4', '5']),
        allergies : z.string().optional(),
    }),
    //only two types of data tiles json or yaml
});

//export your collections 
export const collections = {
    students, 
}