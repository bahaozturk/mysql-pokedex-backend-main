import express from "express"
import { getAllPokemons, getAllTypes, getOnePokemon, getOneType, getAllAbilities, getOneAbility } from "../controllers/pokemons.js";

const router = express.Router();

router.get("/pokemons", getAllPokemons)
router.get("/pokemons/:id", getOnePokemon)
router.get("/types", getAllTypes)
router.get("/types/:id", getOneType)
router.get("/abilities", getAllAbilities)
router.get("/abilities/:id", getOneAbility)

export default router;