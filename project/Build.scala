import sbt._
import Keys._
import PlayProject._

object ApplicationBuild extends Build {

    val appName         = "ScalaIde"
    val appVersion      = "1.0-SNAPSHOT"

    val appDependencies = Seq(
      // Add your project dependencies here,
        "org.scala-lang" % "scala-compiler" % "2.9.1"
    )

    val main = PlayProject(appName, appVersion, appDependencies, mainLang = SCALA).settings(
      // Add your own project settings here      
    )

}
