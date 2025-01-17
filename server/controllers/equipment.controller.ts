import { Request,Response } from 'express';
import { PrismaClient } from '@prisma/client';
import uploadImages from '../utils/uploadImages';
const prisma = new PrismaClient();

const createEquipment = async (req:Request, res:Response) => {
  try {
    const imagesURL = await uploadImages(req.body.images);
    req.body.images = imagesURL;
    console.log('creating');
    const createEquipment = await prisma.equipment.create({
      data: req.body,
    });
    console.log(createEquipment);
    res.status(200);
    res.send(createEquipment);
  } catch (error) {
    console.log(error);
    res.status(300);
  }
};

const getAllEquipments = async (req:Request, res:Response) => {
  try {
    const getEquipments = await prisma.equipment.findMany();
    res.status(200);
    res.send(getEquipments);
  } catch (error) {
    console.log(error);
    res.status(300);
  }
};

const getEquipmentById = async (req:Request, res:Response) => {
  try {
    const equipment = await prisma.equipment.findUnique({
      where: { id: req.params.id },
    });
    res.status(200);
    res.send(equipment);
  } catch (error) {
    console.log(error);
    res.status(300);
  }
};

export { createEquipment, getAllEquipments, getEquipmentById };
