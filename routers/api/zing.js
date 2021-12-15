const express = require("express")
const router = express.Router()

const zing = require("../../controllers/ZingController")

// get song
router.get("/song", zing.getSong)

// get songUrl
router.get("/songUrl", zing.getSongUrl)

// get playlist
router.get("/playlist", zing.getPlaylist)

// get top100
router.get("/top100", zing.getTop100)

// get charthome
router.get("/chart-home", zing.getChartHome)

// get info song
router.get("/info", zing.getInfo)

module.exports = router