package com.stackroute.githubdemo.controller;

import com.stackroute.githubdemo.model.Git;
import com.stackroute.githubdemo.service.GitService;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
public class Controller {
    private GitService gitService;

    @Autowired
    public Controller(GitService gitService) {
        this.gitService = gitService;
    }

    @PostMapping(value = "/create", produces = "application/json")
    public ResponseEntity saveRepo(@RequestBody Git repo) {
        System.out.println("created fucker!!");
        System.out.println(repo.getName() + repo.getId());
        boolean done = gitService.saveRepo(repo);
        JSONObject jsonObject = new JSONObject();
        jsonObject.put("done", done);
        return ResponseEntity.ok(jsonObject.toString());
    }


    @RequestMapping("/getAll")
    public ResponseEntity getAll() {
        return new ResponseEntity<>("ok", HttpStatus.OK);
    }

    @GetMapping(value = "/getAllRepos", produces = "application/json")
    public ResponseEntity getAllRepos() {
        return new ResponseEntity<>(gitService.getAllRepo(), HttpStatus.OK);
    }

//    @DeleteMapping("/delete/{RepoName}")
//    public ResponseEntity deleteRepo(@PathVariable String RepoName) throws Exception {
//        ResponseEntity responseEntity;
//        Git repo = new Git();
//        repo.setRepoName(RepoName);
//
//        responseEntity = new ResponseEntity<>(gitService.deleteRepo(repo), HttpStatus.OK);
////        } catch (TrackNotFoundException e) {
////            responseEntity = new ResponseEntity<>(e.getMessage(), HttpStatus.CONFLICT);
////        }
//        return responseEntity;
//    }
}