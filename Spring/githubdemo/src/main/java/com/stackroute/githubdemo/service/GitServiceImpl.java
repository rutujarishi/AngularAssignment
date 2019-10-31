package com.stackroute.githubdemo.service;

import com.stackroute.githubdemo.model.Git;
import com.stackroute.githubdemo.repository.GitRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GitServiceImpl implements GitService {

    private GitRepository gitRepository;

    @Autowired
    public GitServiceImpl(GitRepository gitRepository) {
        this.gitRepository = gitRepository;
    }

    @Override
    public boolean saveRepo(Git repo) {
        gitRepository.save(repo);
        return true;
    }

    @Override
    public List<Git> getAllRepo() {

        return gitRepository.findAll();
    }

}
